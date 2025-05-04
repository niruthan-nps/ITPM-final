"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Button } from "../../../styles/components/ui/button";
import { Textarea } from "../../../styles/components/ui/textarea";
import  { ImageUpload }from "../../../components/image-upload";
import NavBar from "../../../components/nav-bar";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import UserRouteProtection from "../../../components/user-route";

export default function CreatePostPage() {
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "/api/posts",
        { content, image },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      router.push("/posts");
    } catch (error) {
      console.error("Failed to create post", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <UserRouteProtection>
      <div className="flex min-h-screen">
        <NavBar currentPage="posts" />
        <div className="flex flex-col ml-20 w-full">
          <Header />
          <main className="flex-grow px-8 py-8">
            <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-purple-50 rounded-xl shadow-md p-6 max-w-full">
              <h1 className="text-2xl font-bold mb-6">Create New Post</h1>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Textarea
                  placeholder="What's on your mind?"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                  className="min-h-[150px]"
                />

                <ImageUpload value={image} onChange={setImage} />

                <div className="flex justify-end space-x-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => router.push("/posts")}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Posting..." : "Post"}
                  </Button>
                </div>
              </form>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </UserRouteProtection>
  );
}

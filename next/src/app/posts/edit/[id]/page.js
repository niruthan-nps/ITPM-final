"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { Button } from "@/styles/components/ui/button";
import { Textarea } from "@/styles/components/ui/textarea";
import ImageUpload from "@/components/image-upload";
import NavBar from "@components/nav-bar";
import Header from "@components/header";
import Footer from "@components/footer";
import UserRouteProtection from "@components/user-route";

export default function EditPostPage() {
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const token = localStorage.getItem("token");
        const { data } = await axios.get(`/api/posts/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setContent(data.content);
        setImage(data.image || "");
      } catch (error) {
        console.error("Failed to fetch post", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `/api/posts/${id}`,
        { content, image },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      router.push("/posts");
    } catch (error) {
      console.error("Failed to update post", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen">
        <NavBar currentPage="posts" />
        <div className="flex flex-col ml-20 w-full">
          <Header />
          <main className="flex-grow px-8 py-8">
            <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-purple-50 rounded-xl shadow-md p-6 max-w-full">
              <div className="animate-pulse space-y-4">
                <div className="h-8 bg-gray-200 rounded w-1/4"></div>
                <div className="h-32 bg-gray-200 rounded"></div>
                <div className="h-48 bg-gray-200 rounded"></div>
                <div className="flex justify-end space-x-4">
                  <div className="h-10 bg-gray-200 rounded w-24"></div>
                  <div className="h-10 bg-gray-200 rounded w-24"></div>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <UserRouteProtection>
      <div className="flex min-h-screen">
        <NavBar currentPage="posts" />
        <div className="flex flex-col ml-20 w-full">
          <Header />
          <main className="flex-grow px-8 py-8">
            <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-purple-50 rounded-xl shadow-md p-6 max-w-full">
              <h1 className="text-2xl font-bold mb-6">Edit Post</h1>

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
                    {isSubmitting ? "Updating..." : "Update"}
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

"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { Search } from "lucide-react";
import { Button } from "../../styles/components/ui/button";

import { Input } from "../../styles/components/ui/input";
import { Skeleton } from "../../styles/components/ui/skeleton";
import { Card, CardHeader, CardContent } from "../../styles/components/ui/card";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "../../styles/components/ui/avatar";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../styles/components/ui/pagination";
import ImageUpload from "../../components/image-upload";
import NavBar from "@components/nav-bar";
import Header from "@components/header";
import Footer from "@components/footer";
import UserRouteProtection from "@components/user-route";

export default function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async (page = 1, query = "") => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const { data } = await axios.get(
        `/api/posts?page=${page}&query=${query}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setPosts(data.posts);
      setTotalPages(data.totalPages);
      setCurrentPage(data.currentPage);
    } catch (error) {
      console.error("Failed to fetch posts", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchPosts(1, searchQuery);
  };

  const handlePageChange = (page) => {
    fetchPosts(page, searchQuery);
  };

  return (
    <UserRouteProtection>
      <div className="flex min-h-screen">
        <NavBar currentPage="posts" />
        <div className="flex flex-col ml-20 w-full">
          <Header />
          <main className="flex-grow px-8 py-8">
            <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-purple-50 rounded-xl shadow-md p-6 max-w-full">
              {/* Search Bar */}
              <form onSubmit={handleSearch} className="relative mb-8">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="text-gray-400" />
                </div>
                <Input
                  type="text"
                  className="pl-10"
                  placeholder="Search posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button type="submit" className="ml-2">
                  Search
                </Button>
              </form>

              {/* Create Post Button */}
              <div className="mb-8">
                <Link href="/posts/create">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Create New Post
                  </Button>
                </Link>
              </div>

              {/* Posts Feed */}
              {loading ? (
                <div className="space-y-6">
                  {[...Array(3)].map((_, i) => (
                    <Card key={i}>
                      <CardHeader>
                        <div className="flex items-center space-x-4">
                          <Skeleton className="h-12 w-12 rounded-full" />
                          <div className="space-y-2">
                            <Skeleton className="h-4 w-[250px]" />
                            <Skeleton className="h-4 w-[200px]" />
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-[300px]" />
                        <Skeleton className="h-[200px] w-full" />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : posts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">
                    {searchQuery ? "No matching posts found" : "No posts yet"}
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {posts.map((post) => (
                    <PostCard
                      key={post.id}
                      post={post}
                      onDelete={() => fetchPosts()}
                    />
                  ))}
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <Pagination className="mt-8">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage > 1)
                            handlePageChange(currentPage - 1);
                        }}
                      />
                    </PaginationItem>
                    {[...Array(totalPages)].map((_, i) => (
                      <PaginationItem key={i}>
                        <PaginationLink
                          href="#"
                          isActive={currentPage === i + 1}
                          onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(i + 1);
                          }}
                        >
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    <PaginationItem>
                      <PaginationNext
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage < totalPages)
                            handlePageChange(currentPage + 1);
                        }}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              )}
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </UserRouteProtection>
  );
}

function PostCard({ post, onDelete }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      const token = localStorage.getItem("token");
      await axios.delete(`/api/posts/${post.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      onDelete();
    } catch (error) {
      console.error("Failed to delete post", error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={post.author.avatarUrl} />
            <AvatarFallback>
              {post.author.firstName.charAt(0)}
              {post.author.lastName?.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold">
              {post.author.firstName} {post.author.lastName}
            </h3>
            <p className="text-gray-500 text-sm">
              {new Date(post.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
        <Button
          variant="destructive"
          size="sm"
          onClick={handleDelete}
          disabled={isDeleting}
        >
          {isDeleting ? "Deleting..." : "Delete"}
        </Button>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{post.content}</p>
        {post.image && (
          <div className="mb-4 rounded-lg overflow-hidden">
            <img
              src={post.image}
              alt="Post"
              className="w-full h-auto object-cover"
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
}

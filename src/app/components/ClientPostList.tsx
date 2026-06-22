'use client';

import { useEffect, useState } from 'react';
import { Post } from '@/app/types/post';

export default function ClientPostList() {
	const [posts, setPosts] = useState<Post[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function getPosts() {
			const res = await fetch('https://jsonplaceholder.typicode.com/posts');
			const data: Post[] = await res.json();

			setPosts(data.slice(0, 5));
			setLoading(false);
		}

		getPosts();
	}, []);

	if (loading) {
		return <p className="text-[14px] text-gray-500">게시글을 불러오는 중...</p>;
	}

	return (
		<div className="space-y-3">
			{posts.map((post) => (
				<div key={post.id} className="rounded border p-4">
					<p className="text-[14px] font-bold">{post.title}</p>
					<p className="mt-1 text-[13px] text-gray-500">{post.body}</p>
				</div>
			))}
		</div>
	);
}

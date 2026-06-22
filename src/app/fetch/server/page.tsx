import { Post } from '@/app/types/post';

export default async function ServerFetchPage() {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
		cache: 'no-store',
	});

	const posts: Post[] = await res.json();

	return (
		<div className="rounded-lg border bg-white p-6">
			<h1 className="mb-4 text-2xl font-bold">Server Component Fetching</h1>

			<p className="mb-6 text-[14px] text-gray-600">
				서버에서 데이터를 가져온 뒤 HTML을 만들어 내려줍니다.
			</p>

			<div className="space-y-3">
				{posts.slice(0, 5).map((post) => (
					<div key={post.id} className="rounded border p-4">
						<p className="text-[14px] font-bold">{post.title}</p>
						<p className="mt-1 text-[13px] text-gray-500">{post.body}</p>
					</div>
				))}
			</div>
		</div>
	);
}

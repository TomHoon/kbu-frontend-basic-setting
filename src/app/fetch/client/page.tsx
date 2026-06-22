"use client"

import ClientPostList from '@/app/components/ClientPostList';
import { useUserStore } from '@/app/store/UserStore';
import { useEffect } from 'react';

export default function ClientFetchPage() {


	const user = useUserStore(state => state.user);
	useEffect(() => {
		console.log(user);
	}, [user])

	return (
		<div className="rounded-lg border bg-white p-6">
			<h1 className="mb-4 text-2xl font-bold">Client Component Fetching</h1>

			<p className="mb-6 text-[14px] text-gray-600">
				브라우저에서 데이터를 가져옵니다.
			</p>

			<ClientPostList />
		</div>
	);
}

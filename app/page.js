import * as React from 'react'
import DemoTable from '@/components/demo-table'
import Menu from './menu'

export default function Home() {
	return (
		<main>
			<DemoTable className="mb-2" />
			<Menu />
		</main>
	)
}

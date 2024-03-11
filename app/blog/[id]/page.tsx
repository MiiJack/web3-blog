import BlogList from '../../components/BlogList'
import Link from 'next/link'

export default function BlogPage({ params }: { params: { id: string } }) {
    return (
        <div className="blogListPage">
            <BlogList />
            <div>
            <h1>Blog - {params.id}</h1>
            <p>Blog details for {params.id}</p>
            <Link href={`/blog/${params.id}/image`}>Go to Image Page</Link>
            </div>
        </div>
    )
}
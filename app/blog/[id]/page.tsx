import BlogList from '../../components/BlogList'
import Link from 'next/link'

export default function BlogPage({ params }: { params: { id: string } }) {
    return (
        <div>
            <h1>Blog - {params.id}</h1>
            <p>Blog details for {params.id}</p>
            <Link href={`/blog/${params.id}/image`}>Go to Image Page</Link>
            <BlogList />
        </div>
    )
}
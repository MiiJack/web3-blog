import Link from 'next/link'

const blogs = [
    { id: 1, title: 'Blog 1' },
    { id: 2, title: 'Blog 2' },
    { id: 3, title: 'Blog 3' },
    { id: 4, title: 'Blog 4' },
    { id: 5, title: 'Blog 5' },
    { id: 6, title: 'Blog 6' },
    { id: 7, title: 'Blog 7' },
    { id: 8, title: 'Blog 8' },
    { id: 9, title: 'Blog 9' },
]

export default function BlogList() {
    return (
        <div>
            <h2>Blog List</h2>
            <ul>
                {blogs.map((blog) => (
                    <li key={blog.id}>
                        <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
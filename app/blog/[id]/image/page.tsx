import BlogList from "@/app/components/BlogList";
import Image from 'next/image'

export default function BlogImagePage({ params }: { params: { id: string } }) {
    return (
        <div>
            <h1>Blog - {params.id} (Image)</h1>
            <Image
                src={`https://picsum.photos/seed/${params.id}/640/360`}
                alt={`Blog ${params.id} Image`}
                width={640}
                height={360}
            />
            <BlogList />
        </div>
    )
}
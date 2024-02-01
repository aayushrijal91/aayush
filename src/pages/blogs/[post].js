function Post({ title }) {
    return (
        <section className="main py-32">
            <div className="container">
                <h1>{title}</h1>
            </div>
        </section>
    )
}

export default Post;

export async function getServerSideProps(context) {
    const { post } = context.params;

    return {
        props: {
            title: post
        }
    }
}
import { connect } from "react-redux";
import Layout from "hocs/layouts/Layout";
import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";
import { Link, useParams } from "react-router-dom";
import { useEffect } from 'react'
import { get_blog } from "../../redux/actions/blog/blog";
import moment from "moment";

function PostDetail({
  get_blog,
  post
}){

  const params = useParams()
  const slug = params.slug

  useEffect(()=>{
    window.scrollTo(0,0)
    get_blog(slug)
  }, [])

  if (!post) return <div>Loading...</div>;
  
  return(
    <Layout>
      <Navbar />
      <div className="pt-24">
        <div className="relative overflow-hidden bg-white py-16">

          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-prose text-lg">
              <h1>
                <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                  {post.title}
                </span>
              </h1>
              <div className="min-w-0 flex-1 p-4 pt-8">
                <div className="">

                    <span className=" hover:text-orange-500  mx-1 font-medium text-gray-800 text-sm "><Link to={`/category/${post.category.slug}`}>{post.category.name}</Link></span> <span className="text-gray-300">&middot;</span> 
                    <span className="mt-2 ml-2 mr-1 font-medium text-gray-800 text-sm">{moment(post.published).format('LL')}</span> <span className="text-gray-300">&middot;</span>
                    <span className="mt-2 mx-2 font-medium text-gray-800 text-sm">{post.time_read} min read</span> 
                    <p className="mt-4 text-lg font-regular text-gray-800 leading-8">{post.description}</p>
                </div>
              </div>
            </div>
            <div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
              <p>
                Faucibus commodo massa rhoncus, volutpat. <strong>Dignissim</strong> sed <strong>eget risus enim</strong>.
                Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra
                tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.{' '}
                <a href="#">Mattis mauris semper</a> sed amet vitae sed turpis id.
              </p>
              <ul role="list">
                <li>Quis elit egestas venenatis mattis dignissim.</li>
                <li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
                <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
              </ul>
              <p>
                Quis semper vulputate aliquam venenatis egestas sagittis quisque orci. Donec commodo sit viverra aliquam
                porttitor ultrices gravida eu. Tincidunt leo, elementum mattis elementum ut nisl, justo, amet, mattis. Nunc
                purus, diam commodo tincidunt turpis. Amet, duis sed elit interdum dignissim.
              </p>
              <h2>From beginner to expert in 30 days</h2>
              <p>
                Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
                Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus
                mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis
                ipsum eu a sed convallis diam.
              </p>
              <blockquote>
                <p>
                  Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique
                  pellentesque. Blandit amet, sed aenean erat arcu morbi.
                </p>
              </blockquote>
              <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
                sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
              </p>
              <figure>
                <img
                  className="w-full rounded-lg"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
                  alt=""
                  width={1310}
                  height={873}
                />
                <figcaption>Sagittis scelerisque nulla cursus in enim consectetur quam.</figcaption>
              </figure>
              <h2>Everything you need to get up and running</h2>
              <p>
                Purus morbi dignissim senectus mattis <a href="#">adipiscing</a>. Amet, massa quam varius orci dapibus
                volutpat cras. In amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus
                non molestie. Gravida quis fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc,
                congue erat ac. Cras fermentum convallis quam.
              </p>
              <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
                sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  )
}

const mapStateToProps = state => ({
  post: state.blog.post
})

export default connect(mapStateToProps, {
  get_blog
})(PostDetail)
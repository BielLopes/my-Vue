import showBlogs from './components/showBlogs.vue'
import singleBlog from './components/singleBlog.vue'
import addBlog from './components/addBlog.vue'

export default[
    {
        path:'/',
        component: showBlogs
    },
    {
        path:'/add',
        component: addBlog
    },
    //Isso fica por último
    {
        path:'/blog/:id',
        component: singleBlog
    },
]
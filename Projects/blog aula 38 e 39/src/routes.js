import showBlogs from './components/showBlogs.vue'
import listBlog from './components/listBlog.vue'
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
]
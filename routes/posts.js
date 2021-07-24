import { Router } from 'express'
import * as postsCtrl from '../controllers/posts.js'
const router = Router()

export {
  router
}


router.get('/new', postsCtrl.new)
router.post('/', postsCtrl.create)
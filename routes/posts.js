import { Router } from 'express'
import * as postsCtrl from '../controllers/posts.js'
const router = Router()

export {
  router
}

router.post('/', postsCtrl.create)
router.get('/new', postsCtrl.new)
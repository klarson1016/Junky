import { Router } from 'express'
import * as postsCtrl from '../controllers/posts.js'
const router = Router()

export {
  router
}


router.get('/new', isLoggedIn, postsCtrl.new)
router.post('/', isLoggedIn, postsCtrl.create)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}
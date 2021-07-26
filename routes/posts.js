import { Router } from 'express'
import * as postsCtrl from '../controllers/posts.js'
const router = Router()

export {
  router
}

router.get('/show/:id', isLoggedIn, postsCtrl.show)
router.get('/new', isLoggedIn, postsCtrl.new)
router.post('/', isLoggedIn, postsCtrl.create)
router.post("/:id/", isLoggedIn, postsCtrl.delete)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}
import { Router } from 'express'
import * as postsCtrl from '../controllers/posts.js'
import * as indexCtrl from '../controllers/index.js'


const router = Router()

export {
  router
}

router.get('/show/:id', isLoggedIn, postsCtrl.show)
router.get('/new', isLoggedIn, postsCtrl.new)
router.post('/', isLoggedIn, postsCtrl.create)
router.delete('/show/:id', isLoggedIn, postsCtrl.delete)
router.put('/:id', isLoggedIn, postsCtrl.update)
router.get('/:id/edit', isLoggedIn, postsCtrl.edit)
router.post('/show/:id/comment', isLoggedIn, postsCtrl.addComment)
router.delete('/show/:id', isLoggedIn, postsCtrl.deleteComment)
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}
import { Router } from 'express'
import * as commentsCtrl from "../controllers/comments.js"

export {
  router
}

const router = Router()

router.get('/', isLoggedIn, messagesCtrl.index)
router.post('/', isLoggedIn, messagesCtrl.create)
router.get('/:id', isLoggedIn, messagesCtrl.show)
router.post('/:id', isLoggedIn, messagesCtrl.reply)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}
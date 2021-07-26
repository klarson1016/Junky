import { Router } from 'express'
import * as indexCtrl from '../controllers/index.js'

export {
  router
}

const router = Router()
// router.get('/', function (req, res) {
//   //res.render('index', { title: 'Home Page', user: req.user ? req.user : null })
//   res.render('index', {title: 'Home Page', user: req.user ? req.user : null}, indexCtrl.index)
// })
router.get('/', isLoggedIn, indexCtrl.index)


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}
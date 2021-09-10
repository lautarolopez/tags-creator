import { Router } from "https://deno.land/x/oak/mod.ts"
import * as plainController from "../../controllers/plain/index.controller.ts"

const router = new Router();

router.get('/plain/:list_name/all/links', plainController.getAllLinks)
router.get('/plain/:list_name/:tag_name/links', plainController.getLinksByTag)
router.get('/plain/:list_name/all/names', plainController.getAllNames)
router.get('/plain/:list_name/:tag_name/names', plainController.getNamesByTag)

export default router;
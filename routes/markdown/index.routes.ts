import { Router } from "https://deno.land/x/oak/mod.ts"
import * as mdController from "../../controllers/markdown/index.controller.ts"

const router = new Router();

router.get('/md/:list_name/all', mdController.getAll)
router.get('/md/:list_name/:tag_name', mdController.getByTag)

export default router;
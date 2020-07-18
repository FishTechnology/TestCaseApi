import { Router } from 'express';
import testcase from './routes/testcase';
//import auth from './routes/auth';
//import user from './routes/user';
//import agendash from './routes/agendash';

// guaranteed to get dependencies
export default () => {
	const app = Router();
	testcase(app);
	//auth(app);
	//user(app);
	//agendash(app);

	return app
}
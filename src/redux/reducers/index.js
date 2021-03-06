import { combineReducers } from 'redux';
import authReducers from './auth.reducers';
import errorReducers from './error.reducers';
import propertyReducers from "./property.reducers";
import accountReducers from './account.reducers';
import addPropertyReducers from './add-properties.reducers';
import categoryReducers from './category.reducer';
import dashboardReducers from '../reducers/dashboard.reducers';
import bookmarkedPropertiesReducers from '../reducers/bookmark.reducers';
import agencyPropertiesReducers from '../reducers/agency-properties.reducers';

export default combineReducers({
	auth: authReducers,
	err: errorReducers,
	properties: propertyReducers,
	account: accountReducers,
	addProperty: addPropertyReducers,
	category: categoryReducers,
	dashboard: dashboardReducers,
	bookmarkedProperties: bookmarkedPropertiesReducers,
	agencyProperties: agencyPropertiesReducers
});

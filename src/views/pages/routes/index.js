import React from 'react'
import { Switch, Route } from 'react-router-dom'

import home from './Home'
import account from './Account'
import entities from './Entities'
import permissions from './Permissions'
import users from './Users'
import specificEntity from './SpecificEntity'
import specificMP from './SpecificMP'
import editEntity from './EditEntity'
import createMP from './CreateMP'
import specificEvent from './SpecificEvent'
import specificEventEdit from './SpecificEventEdit'
import editEvent from './EditEvent'
import theme from './Theme'
// Initialize components, with store if required.

const Theme = theme()
const Home = home()
const Account = account()
const Entities = entities()
const Permissions = permissions()
const Users = users()
const SpecificEntity = specificEntity()
const SpecificMP = specificMP()
const EditEntity = editEntity()
const CreateMP = createMP()
const SpecificEvent = specificEvent()
const SpecificEventEdit = specificEventEdit()
const EditEvent = editEvent()


export const createRoutes = () => (
  <Switch>
    <Route path='/dashboard/' exact component={Home} />
    <Route path='/dashboard/account' exact component={Account} />
    <Route path='/dashboard/entities' exact component={Entities} />
    <Route path='/dashboard/permissions' exact component={Permissions} />
    <Route path='/dashboard/users' exact component={Users} />
    <Route path='/dashboard/entities/:id' exact component={SpecificEntity} />
    <Route path='/dashboard/entities/mp/:id' exact component={SpecificMP} />
    <Route path='/dashboard/editentity/:id' exact component={EditEntity} />
    <Route path='/dashboard/editmp/:id' exact component={CreateMP} />
    <Route path='/dashboard/events/:id' exact component={SpecificEvent} />
    <Route path='/dashboard/editeventtt/:id' exact component={SpecificEventEdit} />
    <Route path='/dashboard/editevent/:id' exact component={EditEvent} />
    <Route path='/dashboard/theme' exact component={Theme} />
  </Switch>
)

export default createRoutes

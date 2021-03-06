import React, { Component } from 'react';
import { List } from 'immutable';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Menu, Icon, Button, Card, Select, Tooltip } from 'antd';
import { getNotification, notificationActions } from 'src/notification';
import { getTaskFilter, getVisibleTasks, tasksActions } from 'src/tasks';
import Notification from '../../components/notification';
import TaskFilters from '../../components/task-filters';
import TaskForm from '../../components/task-form';
import TaskList from '../../components/task-list';
import Sidebar from '../../components/sidebar';

import './tasks.css'
const SubMenu = Menu.SubMenu;

export class TasksPage extends Component {

  constructor( props ){
    super(props)
    this.state = {
      collapsed: false,
      isCoin: {}
    }
  }

  static propTypes = {
    createTask: PropTypes.func.isRequired,
    dismissNotification: PropTypes.func.isRequired,
    filterTasks: PropTypes.func.isRequired,
    filterType: PropTypes.string.isRequired,
    loadTasks: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    notification: PropTypes.object.isRequired,
    removeTask: PropTypes.func.isRequired,
    tasks: PropTypes.instanceOf(List).isRequired,
    undeleteTask: PropTypes.func.isRequired,
    unloadTasks: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.loadTasks();
    this.props.filterTasks(
      this.getFilterParam(this.props.location.search)
    );
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.search !== this.props.location.search) {
      this.props.filterTasks(
        this.getFilterParam(nextProps.location.search)
      );
    }
  }

  componentWillUnmount() {
    this.props.unloadTasks();
  }

  getFilterParam(search) {
    const params = new URLSearchParams(search);
    return params.get('filter');
  }

  renderNotification() {
    const { notification } = this.props;
    return (
      <Notification
        action={this.props.undeleteTask}
        actionLabel={notification.actionLabel}
        dismiss={this.props.dismissNotification}
        display={notification.display}
        message={notification.message}
      />
    );
  }

    toggleCollapsed = () => {
      console.log('suhhh', this.state.collapsed);
      this.setState({
        collapsed: !this.state.collapsed
      })
    }


  render() {
    let innerContent = classNames({
      'innerContentSmall': !this.state.collapsed,
      'innerContentBig': this.state.collapsed,
      'flexx': true
    })
    return (
      <div className="g-row">
        <Sidebar collapsedSate={this.state.collapsed} />
        <div className='topBar'>
          <div className='headerWrapper flexx headerText'>
            <img className='topHeaderIcon' src='./coinrexheadlogo.svg'></img>
            <h1 className='headerText'>CoinREX</h1>
          </div>
          <div className='iconWrapper flexx accountIcon'>
            <i className="fa fa-user-circle fa-3x iconn" aria-hidden="true"></i>
          </div>
          <div className='iconWrapper flexx tintIcon'>
            <i className="fa fa-tint fa-2x iconn" aria-hidden="true"></i>
          </div>
        </div>
        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>


      </div>
    );
  }
}


//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = createSelector(
  getNotification,
  getTaskFilter,
  getVisibleTasks,
  (notification, filterType, tasks) => ({
    notification,
    filterType,
    tasks
  })
);

const mapDispatchToProps = Object.assign(
  {},
  tasksActions,
  notificationActions
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksPage);

/*

<div className="g-col">
  <TaskForm handleSubmit={this.props.createTask} />
</div>

<div className="g-col">
  <TaskFilters filter={this.props.filterType} />
  <TaskList
    removeTask={this.props.removeTask}
    tasks={this.props.tasks}
    updateTask={this.props.updateTask}
  />
</div>
{this.props.notification.display ? this.renderNotification() : null}

<h1>Check if ur over it</h1>

*/

import React, { Component } from 'react'

class Item extends Component {
  render () {
    let { item, index } = this.props
    if (item === 0) {
      return (
        <tr>
          <td colSpan='4' className='text-center'>
            <h4>No Item</h4>
          </td>
        </tr>
      )
    }
    let classNameLabel = ''
    let nameLabel = ''
    switch (item.level) {
      case 1:
        classNameLabel = 'label label-info'
        nameLabel = 'Low'
        break
      case 2:
        classNameLabel = 'label label-warning'
        nameLabel = 'Medium'
        break
      case 3:
        classNameLabel = 'label label-danger'
        nameLabel = 'High'
        break
      default:
        classNameLabel = 'label label-info'
        nameLabel = 'Low'
        break
    }
    let classNameStar = ''
    let starLabel = ''
    switch (item.star) {
      case 2:
        classNameStar = 'bi bi-star-fill'
        starLabel = (<>
          <svg className='bi bi-star-fill' width='1em' height='1em' viewBox='0 0 16 16' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
            <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
          </svg>
          <svg className='bi bi-star-fill' width='1em' height='1em' viewBox='0 0 16 16' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
            <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
          </svg>
        </>)
        break
      case 3:
        classNameStar = 'bi bi-star-fill'
        starLabel = (<>
          <svg className='bi bi-star-fill' width='1em' height='1em' viewBox='0 0 16 16' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
            <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
          </svg>
          <svg classame='bi bi-star-fill' width='1em' height='1em' viewBox='0 0 16 16' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
            <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
          </svg>
          <svg className='bi bi-star-fill' width='1em' height='1em' viewBox='0 0 16 16' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
            <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
          </svg>
          
        </>)
        break
      default:
        classNameStar = 'bi bi-star-fill'
        starLabel = <svg classame='bi bi-star-fill' width='1em' height='1em' viewBox='0 0 16 16' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
          <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
        </svg>
        break
    }
    return (
      <tr>
        <td className='text-center'>{index}</td>
        <td>{item.name}</td>
        <td className='text-center'>
          <span>{item.point}</span>
        </td>
        <td className='text-center'>
          <span className={classNameLabel}>{nameLabel}</span>
        </td>
        <td className='text-center'>
          <span className={classNameStar}>{starLabel}</span>
        </td>
        <td>
          <button
            type='button' className='btn btn-warning btn-sm marginR5'
            onClick={() => this.props.handleEditItem(index, item)}
          > Edit
          </button>
          <button
            type='button' className='btn btn-danger btn-sm'
            onClick={() => this.props.handleShowAlert(item)}
          >Delete
          </button>
        </td>
      </tr>
    )
  }
}

export default Item

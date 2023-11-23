import React, { Component } from 'react'

export class  TableFooter extends Component {

  render() {
    const {data} = this.props;
    const pages = [];
    for(let i = 0; i <data?.total_page; i++){
        pages.push(i)
    }
    return (
        <div className="table_footer">
            <div className="pagination_container">
                <span>Sətir sayı</span>
                <select onChange={(e)=>this.props.changePage(e.target.value)} value={data?.page}>
                    {
                        pages.map((item, i)=>{
                            return(
                                <option value={item+1} key={i}>{item+1}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div className="page_count_container">
                <div className="page_count">
                    <span>{data?.page==1?1:(data?.page-1)*6+1}-{data?.page*6}</span>
                    /
                    <span>{data?.total_page*6}</span>
                </div>
                <div className="change_page_container">
                    
                    <button disabled={data?.page == 1} onClick={data?.page == 1?()=>{}:()=>this.props.changePage(data?.page-1)}>
                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.2559 0.410765C7.58134 0.736202 7.58134 1.26384 7.2559 1.58928L2.84516 6.00002L7.2559 10.4108C7.58134 10.7362 7.58134 11.2638 7.2559 11.5893C6.93047 11.9147 6.40283 11.9147 6.07739 11.5893L1.07739 6.58928C0.751954 6.26384 0.751954 5.7362 1.07739 5.41076L6.07739 0.410765C6.40283 0.0853278 6.93047 0.0853278 7.2559 0.410765Z" fill="#2058BB" />
                        </svg>
                    </button>
                    <button disabled={data?.page == data?.total_page} onClick={data?.page == data?.total_page?()=>{}:()=>this.props.changePage(data?.page+1)}>
                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.744078 0.410765C1.06951 0.0853278 1.59715 0.0853278 1.92259 0.410765L6.92259 5.41076C7.24803 5.7362 7.24803 6.26384 6.92259 6.58928L1.92259 11.5893C1.59715 11.9147 1.06951 11.9147 0.744078 11.5893C0.418641 11.2638 0.418641 10.7362 0.744078 10.4108L5.15482 6.00002L0.744078 1.58928C0.418641 1.26384 0.418641 0.736202 0.744078 0.410765Z" fill="#2058BB"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
  }
}

export default TableFooter
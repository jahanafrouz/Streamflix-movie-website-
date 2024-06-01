// import styled from "styled-components";


// export const ProductList = styled.section`
//   margin: 2rem 0;

//   h1 {
//     color: #3a86c1;
//     margin-bottom: 1rem;
//     font-size: 32px;
//   }

  
//     li {
//       flex-basis: calc(50% - 4rem);
//       margin-bottom: 1rem;
//       padding: 1rem;
//       background-color: #f2f2f2;
//       border-radius: 10px;

//       a {
//         color: inherit;

//         :hover {
//           color: blueviolet;
//           text-decoration: underline;
//         }

//         img {
//           width: 160px;
//           height: auto;
//           border-radius: 10px;
//           margin-bottom: 0.5rem;
//         }

//         h3 {
//           height: 50px;
//           width: 100%;
//           margin: 0;
//           font-size:16px;
//         }
//       }
//     }
//   }
// `;

// export default ProductList;
import styled from "styled-components";
import { Pagination } from 'antd';

export const ProductList = styled.section`
  margin: 2rem 0;

h1 {
  margin-bottom: 1rem;
  margin-left: 48px;
  color: #e5e5e5;
  font-size: xx-large;
  /* transition: color 0.3s ease;

  &:hover {
    color: #004fd7;
  } */
}

  ul.list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-content: space-between;
    grid-gap: 1rem;
    list-style: none;
    padding: 0;
    margin-left:48px;
    overflow-x: hidden;

    li {
      margin-bottom: 1rem;
      padding: 1rem;
      background-color: #000;
      border-radius: 2px;

      a {
        color: #e5e5e5;
        transition: color 0.3s ease;
        &:hover {
          color: #004fd7;
        }
      }
    }

   img {
          width: 200px;
          height: auto;
          border-radius: 2px;
          margin-bottom: 0.5rem;
        }


        h3 {
          height: 50px;
          width: 100%;
          margin: 0;
          font-size: 16px;
        }
      }
.ant-pagination  {
  display: flex;
 align-items:baseline;
  justify-content:center;
  margin-top:2rem ;
  margin-bottom: 0;
  padding: 16px;

  
}
.ant-pagination .ant-pagination-item a{
color:#e5e5e5;
transition: color 0.3s ease;
        &:hover {
          color: #004fd7;
        }
}
.ant-pagination .ant-pagination-item-active a{
color: #004fd7;
transition: color 0.3s ease;
        &:hover {
          color: #004fd7;
        }
}
button.ant-pagination-item-link {
color: #e5e5e5;
transition: color 0.3s ease;
        &:hover {
          color: #004fd7;
        }
        margin-top: 6px;
}
.ant-pagination .ant-pagination-jump-next  .ant-pagination-item-container .ant-pagination-item-ellipsis{
  color:#e5e5e5;
  transition: color 0.3s ease;
        &:hover {
          color: #004fd7;
        }
       margin-top: 6px;
}

.ant-pagination .ant-pagination-jump-prev  .ant-pagination-item-container .ant-pagination-item-ellipsis{
  color:#e5e5e5;
  transition: color 0.3s ease;
        &:hover {
          color: #004fd7;
        }
        margin-top: 6px;
}
  
 
`;

export default ProductList;





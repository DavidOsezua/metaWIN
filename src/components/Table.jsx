import React from 'react';
import { data } from '../Data/data';
import styles from './Table.module.css';
import { Fade } from 'react-awesome-reveal';

const Table = () => {
  return (
    <Fade>
      <div className='table-responsive '>
        <table className={`${styles.tableStyle}`}>
          <thead>
            <tr>
              {data.map((th) => (
                <th className={`${styles.thStyle}`}>{th.Title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={item.id}
                className={(index + 1) % 2 === 0 ? 'bg-[#5D0074]' : ''}
              >
                <td className={`${styles.tdStyle}`}>
                  {' '}
                  <div className='flex items-center gap-[3px]'>
                    <img
                      src={item.image}
                      className={`${styles.image}  w-[2rem] rounded-md`}
                    />
                    {item.Game}
                  </div>
                </td>

                <td className={`${styles.tdStyle}`}>
                  <div className='flex items-center'>
                    <img
                      src={item.UserImage}
                      className={`${styles.UserImage}`}
                    />
                    {item.User}
                  </div>
                </td>

                <td
                  className={`${styles.tdStyle} ${
                    item.Action === 'ENTRY'
                      ? 'text-[#FFC72E]'
                      : 'text-[#56FF47]'
                  }`}
                >
                  {item.Action}
                </td>

                <td className={`${styles.tdStyle}`}>
                  <div className='flex items-center'>
                    <img src={item.AmountImage} />
                    {item.Amount}
                  </div>
                </td>

                <td className={`${styles.tdStyle} text-[#FF6665]`}>
                  {item.Time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fade>
  );
};

export default Table;

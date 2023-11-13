import React from 'react';
import { data } from '../Data/data';
import './Table.css';

const Table2 = () => {
  return (
    <table className={`tableStyle`}>
      <thead>
        <tr>
          {data.map((th) => (
            <th className={`thStyle`}>{th.Title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr
            key={item.id}
            className={(index + 1) % 2 === 0 ? 'bg-[#5D0074]' : ''}
          >
            <td className={`tdStyle`}>
              {' '}
              <div className='flex items-center gap-[3px]'>
                <img src={item.image} className='w-[2rem] rounded-md' />
                {item.Game}
              </div>
            </td>

            <td className={`tdStyle`}>
              <div className='flex items-center'>
                <img src={item.UserImage} />
                {item.User}
              </div>
            </td>

            <td
              className={`tdStyle ${
                item.Action === 'ENTRY' ? 'text-[#FFC72E]' : 'text-[#56FF47]'
              }`}
            >
              {item.Action}
            </td>

            <td className={`tdStyle`}>
              <div className='flex items-center'>
                <img src={item.AmountImage} />
                {item.Amount}
              </div>
            </td>

            <td className={`tdStyle text-[#FF6665]`}>{item.Time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table2;

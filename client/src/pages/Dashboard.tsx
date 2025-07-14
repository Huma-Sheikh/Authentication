import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Components/NavBar';
import { Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import './Dashboard.css';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  email: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: (a, b) => a?.name?.length - b?.name?.length,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    sorter: (a, b) => a?.age - b?.age,
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
];

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [data, setData] = useState<DataType[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (stored) setUser(JSON?.parse(stored));
    else navigate('/signin');

    const fetchUsers = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/auth/users');
        const usersWithKey = res?.data?.map((u: any, index: number) => ({
          ...u,
          key: index + 1,
        }));
        setData(usersWithKey);
      } catch (err) {
        console.error('Failed to fetch users:', err);
      }
    };

    fetchUsers();
  }, [navigate]);

  const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return (
    <div className="dashboard-wrapper">
      <Navbar />
      <div className="dashboard-content">
        <h2>Welcome, {user?.name}</h2>
        <Table<DataType> columns={columns} dataSource={data} onChange={onChange} />
      </div>
    </div>
  );
};

export default Dashboard;

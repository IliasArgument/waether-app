import React, { useState } from 'react';
import { Input } from 'antd';
import 'antd/dist/antd.css';

const SearchBox = ({ setQuery }) => {

    const [value, setValue] = useState('');
    
    const onSearch = value => {
        setQuery(value)
        setValue('')
    }

    return (
        <div className="search_content">
            <Input.Search
                style={{borderRadius: '20px'}}
                placeholder="input search text"
                onSearch={onSearch}
                enterButton
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    );
};

export default React.memo(SearchBox);
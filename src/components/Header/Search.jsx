import { useState } from 'react';

const Search = props => {
   const [inputValue, setInputValue] = useState('');

   return (
      <form
         onSubmit={e => props.handleSubmit(e, inputValue)}
         className="header__search"
      >
         <input
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            type="text"
            placeholder="请输入要查询的IP或域名"
            minLength="7"
            maxLength="15"
            size="15"
            pattern="^((\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$"
            required
         />
         <button>&gt;</button>
      </form>
   );
};

export default Search;

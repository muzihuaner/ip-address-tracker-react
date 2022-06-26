import InfoBox from './InfoBox';

const Info = props => {
   return (
      <div className="header__info">
         <InfoBox title="IP地址" info={props.ip || 'Invalid Ip'} />
         <InfoBox
            title="位置"
            info={
               `${props.country ? props.country : 'Invalid ip'}, ${
                  props.city ? props.city : 'Invalid ip'
               }` || 'Invalid Ip'
            }
         />
         <InfoBox title="时区" info={props.timezone || 'Invalid Ip'} />
         <InfoBox title="网络运营商" info={props.isp || 'Invalid Ip'} />
      </div>
   );
};

export default Info;

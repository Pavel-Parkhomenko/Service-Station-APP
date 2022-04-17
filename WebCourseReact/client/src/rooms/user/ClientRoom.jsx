import React from 'react';
import Footer from '../../compsPage/Footer';
import Header from '../../compsPage/Header';
import './ClientRoom.css'
import FeedbackPanel from './FeedbackPanel'
import ClientPriceTable from "./ClientPriseTable";
import ClientOrderPanel from "./ClientOrderPanel";
import EntranceInfo from "../../components/EntranceInfo";
import ClientPanelMenu from "./ClientPanelMenu";

function ClientRoom() {

  return (
    <div>
      <Header menu='client' />
      <div>
       <ClientPanelMenu/>
        <EntranceInfo/>
        <div className='client-main'>
          <ClientOrderPanel/>
          <FeedbackPanel/>
          <ClientPriceTable/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ClientRoom;
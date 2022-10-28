import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { PageOne } from './PageOne';
import { PageTwo } from './PageTwo';
import { PageThree } from './PageThree';

export const TabSample = () => {
  return(
    <Tabs>
      <div className="header">
      <div className="cat">WATSUNBLOG</div>
    <TabList>
      <Tab>HOME</Tab>
      <Tab>サービス</Tab>
      <Tab>ブログ</Tab>
    </TabList>
      </div>

    <TabPanel>
      <PageOne />
    </TabPanel>
    <TabPanel>
      <PageTwo />
    </TabPanel>
     <TabPanel>
      <PageThree />
    </TabPanel>
  </Tabs>
  );
}

import React from "react";

import Layout from "../Layout";
import Collapser from "../Collapser";
import OldComponents from "../OldComponents";
import TestComponents from "../TestComponents";

const Demo = () => {
  return (
    <Layout>
      <Collapser>
        <Collapser.Header>Header</Collapser.Header>
        <Collapser.Content>Text</Collapser.Content>
      </Collapser>
      {/* <OldComponents /> */}
    </Layout>
  );
};

export default Demo;

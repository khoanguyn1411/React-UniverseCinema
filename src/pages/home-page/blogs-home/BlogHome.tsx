import { ButtonWatchmore, Title } from "@/components";
import { ItemBlog } from "@/components/item-blog/ItemBlog";
import { configs } from "@/configs";
import React from "react";

export const BlogHome: React.FC = () => {
  const blogsList = configs.mockDataBlog;
  return (
    <div className="wrapper mb-[3rem]">
      <Title>BLOG ĐIỆN ẢNH</Title>
      <div className="mt-[2rem]">
        {blogsList.map((blog, index) => (
          <ItemBlog key={index} data={blog} />
        ))}
      </div>
      <ButtonWatchmore onClick={() => {}} />
    </div>
  );
};

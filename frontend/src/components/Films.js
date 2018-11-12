import React from 'react';
import { List, Avatar, Icon, Tooltip, Tag } from 'antd';


const IconText = ({ type, text }) => (
    <span>
    <Icon type={type} style={{ marginRight: 8 }} />
        {text}
  </span>
);

const Films = (props) => {
    return (
        <List
            itemLayout="vertical"
            size="large"
            pagination={{
                onChange: (page) => {
                    console.log(page);
                },
                pageSize: 10,
            }}
            dataSource={props.data}
            footer={<div><b>ant design</b> footer part</div>}
            renderItem={item => (
                <List.Item
                    key={item.title}
                    actions={[
                        <IconText type="clock-circle" text={ item.length + ' min' } />,
                        <IconText type="dollar" text={ "$" + item.price } />,
                        <IconText type="calendar" text={ item.release_year } />,
                    ]}
                    extra={
                        <img width={272} alt="logo" src={"films/" + item.id + ".jpg"} />
                    }
                >
                    <List.Item.Meta
                        avatar={
                            <Tooltip title={ item.language_id.name }>
                                <Avatar src={ "languages/" + item.language_id.icon_name } />
                            </Tooltip>
                        }
                        title={<a href={`/${item.id}/`}>{item.title}</a>}
                        description={item.description}
                    />
                    {item.content}

                    <div>
                        <h4 style={{ marginBottom: 16 }}>Categories:</h4>
                        <div>
                            { item.category.map(
                                (category) =>
                                <Tag color="magenta"> { category } </Tag>
                            )}
                        </div>
                    </div>
                </List.Item>
            )}
        />
    );
};


export default Films;

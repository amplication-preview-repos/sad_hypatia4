import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const PostViewEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="AuthorName" source="authorName" />
        <TextInput label="Content" multiline source="content" />
        <DateTimeInput label="PublishedDate" source="publishedDate" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};

import S from "@sanity/desk-tool/structure-builder";
import { MdPublic, MdLibraryBooks } from "react-icons/md";

//import PagePreview from "../components/previews/PagePreview";
//import BlogArticlePreview from "../components/previews/BlogArticlePreview";

export default () =>
  S.list()
    .title("Press Start")
    .items([
      S.listItem()
        .title("Business")
        .icon(MdPublic)
        .child(
          S.editor().id("business").title("Business").schemaType("business")
        ),
      S.documentTypeListItem("game").title("Games").icon(MdLibraryBooks),
    ]);

export const getDefaultDocumentNode = (props) => {
  /**
   * Here you can define fallback views for document types without
   * a structure definition for the document node. If you want different
   * fallbacks for different types, or document values (e.g. if there is a slug present)
   * you can set up that logic in here too.
   * https://www.sanity.io/docs/structure-builder-reference#getdefaultdocumentnode-97e44ce262c9
   */
  const { schemaType } = props;
  if (schemaType === "page") {
    return S.document().views([
      S.view.form(),
      S.view.component(PagePreview).title("Preview"),
    ]);
  }
  if (schemaType === "article") {
    return S.document().views([
      S.view.form(),
      S.view.component(BlogArticlePreview).title("Article Preview"),
    ]);
  }
};

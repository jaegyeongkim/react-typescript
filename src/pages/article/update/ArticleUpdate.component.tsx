import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";

import { CancelBtn } from "components";
import { ArticleStorageState } from "store/persist";
import { ArticleFormValues } from "types/article";
import { CommonH1 } from "style/commonStyled";
import * as S from "../create/ArticleCreate.styled";

const ArticleUpdate = () => {
  const {
    register,
    watch,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ArticleFormValues>();

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const [articleStorage, setArticleStorage] =
    useRecoilState(ArticleStorageState);

  const id = searchParams.get("id") || 0;

  useEffect(() => {
    setValue("title", articleStorage[id].title);
    setValue("content", articleStorage[id].content);
  }, []);

  const handleUpdate = (data: { title: string; content: string }) => {
    setArticleStorage({
      ...(typeof articleStorage === "object" ? articleStorage : {}),
      [id]: { title: data.title, content: data.content },
    });
    navigate(`/article/detail?id=${id}`);
  };

  return (
    <>
      <CommonH1>Article Update</CommonH1>
      <S.FormWrapper onSubmit={handleSubmit((data) => handleUpdate(data))}>
        <S.TitleWrapper>
          <S.Label data-error={true}>제목</S.Label>
          <S.TitleInput
            id="title"
            type="text"
            placeholder="제목을 입력하세요."
            aria-invalid={errors.title ? "true" : "false"}
            data-error={errors.title ? true : false}
            maxLength={50}
            {...register("title", { required: "제목은 필수 값입니다." })}
          />
          {errors.title && (
            <S.Alert role="alert">{errors.title.message}</S.Alert>
          )}
          <S.LengthCount>{watch("title")?.length || 0} / 50</S.LengthCount>
        </S.TitleWrapper>
        <S.TitleWrapper>
          <S.Label>내용</S.Label>
          <S.ContentTextarea
            id="content"
            placeholder="내용을 입력하세요."
            aria-invalid={errors.content ? "true" : "false"}
            data-error={errors.content ? true : false}
            maxLength={500}
            {...register("content", { required: "내용은 필수 값입니다." })}
          />
          {errors.content && (
            <S.Alert role="alert">{errors.content.message}</S.Alert>
          )}
          <S.LengthCount>{watch("content")?.length || 0} / 500</S.LengthCount>
        </S.TitleWrapper>
        <S.BtnWrapper>
          <CancelBtn>취소</CancelBtn>
          <S.SubmitBtn type="submit">수정</S.SubmitBtn>
        </S.BtnWrapper>
      </S.FormWrapper>
    </>
  );
};

export default ArticleUpdate;

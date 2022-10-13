import React from "react";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";

import { CancelBtn } from "components";
import { ArticleFormValues } from "types/article";
import { CommonH1 } from "style/commonStyled";
import * as S from "./ArticleCreate.styled";
import { useCreateArticle } from "hooks/queries";

const ArticleCreate = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<ArticleFormValues>();

  const { createArticle } = useCreateArticle();
  const { mutate } = useMutation(createArticle);

  const handleCreate = (data: ArticleFormValues) => {
    mutate(data);
  };

  return (
    <>
      <CommonH1>Article Create</CommonH1>
      <S.FormWrapper onSubmit={handleSubmit((data) => handleCreate(data))}>
        <S.TitleWrapper>
          <S.Label htmlFor="title">제목</S.Label>
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
          <S.Label htmlFor="content">내용</S.Label>
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
          <S.SubmitBtn type="submit">등록</S.SubmitBtn>
        </S.BtnWrapper>
      </S.FormWrapper>
    </>
  );
};

export default ArticleCreate;

import React from 'react';
import { Link, Script } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Page } from '../../components/Page';
import { Seo } from '../../components/Seo';
import { AuthorSnippet } from '../../components/AuthorSnippet';
import { ArticleTemplateData } from './data';
import * as classes from './style.module.css';
import { pluralize } from '../../utils/pluralize';

// Reference to the local prismjs theme (Modified)
require('../../globalStyles/prism.css');

interface ArticleTemplateProps {
    pageContext: {
        article: ArticleTemplateData;
        listingPagePath: string;
        entityName?: string;
    };
}

export default function ArticleTemplate(props: ArticleTemplateProps): React.ReactElement {
    const article = props.pageContext.article;
    return (
        <>
            <Seo title={article.title} description={article.description || undefined} useTitleTemplate={true} />
            <Page>
                <article className={classes.Article}>
                    <div className={classes.Breadcrumb}>
                        <Link
                            to={props.pageContext.listingPagePath}
                            title={`Назад к Все ${pluralize(props.pageContext.entityName) ?? 'Статьи'}`}
                        >
                            <span className={classes.BackArrow}>&#10094;</span>
                            Все {pluralize(props.pageContext.entityName) ?? 'Статьи'}
                        </Link>
                    </div>
                    <section className={classes.Header}>
                        <span className={classes.Category}>{article.categories.join(' / ')}</span>
                        <h1>{article.title}</h1>
                        <div className={classes.Details}>
                            {article.date}
                        </div>
                    </section>
                    {article.banner && article.banner.src && (
                        <section className={classes.Banner}>
                            <GatsbyImage
                                image={article.banner.src.childImageSharp.gatsbyImageData}
                                alt={article.banner.alt || `Картинка для ${article.title}`}
                                imgClassName={classes.BannerImage}
                            />
                            {article.banner.caption && (
                                <span
                                    className={classes.BannerCaption}
                                    dangerouslySetInnerHTML={{ __html: article.banner.caption }}
                                />
                            )}
                        </section>
                    )}
                       <Script strategy="idle">{'document.getElementById("share-vk").innerHTML =  VK.Share.button(false, {type: "button", text: "ПОДЕЛИТЬСЯ"})'}</Script>
                    <div id='share-vk'></div>
                    <section className={classes.Body}>
                        <div className={classes.Content} dangerouslySetInnerHTML={{ __html: article.body }} />
                        {article.keywords &&
                            article.keywords.map((keyword, key) => {
                                return (
                                    <span key={key} className={classes.Keyword}>
                                        {keyword}
                                    </span>
                                );
                            })}
                    </section>
                    <section className={classes.Footer}>
                        <AuthorSnippet />
                    </section>
                </article>

            </Page>
        </>
    );
}

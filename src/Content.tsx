import React from 'react';
import { usePreloadedQuery, graphql, PreloadedQuery, useLazyLoadQuery } from 'react-relay';
import { ContentQuery } from './__generated__/ContentQuery.graphql';


interface ContentProps {
    queryReference: PreloadedQuery<ContentQuery>;
}

const GraphqlContentQuery = graphql`
        query ContentQuery {
            accountUser {
                id
                imageUrl
                status
                metadata {
                    isBusiness
                    isNewUser
                }
                hoianUser {
                    nickname
                }
            }
        }
    `

export const Content:React.FC = () => {

    
    
    const data = useLazyLoadQuery<ContentQuery>(GraphqlContentQuery, {});
    return (
        <div>
            <h1>{data.accountUser?.hoianUser?.nickname}</h1>
            <h1>{data.accountUser?.status}</h1>
            <h1>{data.accountUser?.id}</h1>
        </div>
    )
}

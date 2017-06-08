/* tslint:disable */

export class ArtModel {
    id: number;
    type: string;
    art_type: string;
    dimensions: string;
    year: number;
    title: string;
    description: string;
    uploaded_by: number;
    url: string;
    thumb_url: string;
    large_url: string;
    width: number;
    height: number;
    depth: number;
    category_id: number;
    active: string;
    blocked: boolean;
    block_message: string;
    unique_id: string;
    place: string;
    hash_tag: string;
    created_at: string;
    updated_at: string;
    emotions_count: [{ id: number, count: number }];
    comments_count: number;
    is_favorite: boolean;
    is_rated; boolean;

}

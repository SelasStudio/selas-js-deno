import * as _supabase_supabase_js from '@supabase/supabase-js';
import { SupabaseClient } from '@supabase/supabase-js';

declare type Customer = {
    id?: string;
    external_id: string;
    user_id: string;
    credits: number;
};
declare type Billing = {
    id?: string;
    stripe_customer_id?: string;
    plan?: string;
    plan_name?: string;
    credits: number;
};
declare type Token = {
    id?: string;
    key: string;
    created_at?: string;
    user_id: string;
    ttl: number;
    quota: number;
    customer_id: string;
    description?: string;
};
declare type Result = {
    id?: string;
    job_id: string;
    uri: string;
    created_at?: string;
    user_id: string;
};
declare type Job = {
    id?: number;
    created_at?: string;
    status?: "pending" | "accepted" | "completed" | "failed";
    user_id?: string;
    accepted_at?: string;
    completed_at?: string;
    failed_at?: string;
    worker_name?: string;
    token_key?: string;
    config: Config;
    job_cost?: number;
};
declare type Config = {
    diffusion?: DiffusionConfig;
};
declare type DiffusionConfig = {
    io?: IOConfig;
    seed?: number;
    steps?: number;
    skip_steps?: number;
    batch_size?: number;
    sampler?: "plms" | "ddim" | "k_lms" | "k_euler" | "k_euler_a";
    guidance_scale?: number;
    width?: number;
    height?: number;
    prompts?: Prompt[];
    init_image?: InputImage;
    mask?: InputImage | Prompt;
    external_guidance?: any;
};
declare type IOConfig = {
    image_format?: "png" | "jpg" | "avif" | "webp";
    image_quality?: number;
    blurhash?: boolean;
};
declare type TextPrompt = {
    text?: string;
    weight?: number;
    concepts?: string[];
    cross_attention_editing?: string;
    cross_attention_weights?: string;
};
declare type InputImage = {
    url: string;
    resize?: "crop" | "center_crop" | "scale";
};
declare type ImagePrompt = {
    image?: InputImage;
    weight?: number;
    cutout_n?: number;
    perceptor?: "vit-l" | "vit-h" | "vit-b" | "vit-g";
};
declare type Prompt = TextPrompt | ImagePrompt;
declare class SelasClient {
    supabase: SupabaseClient;
    constructor(supabase: SupabaseClient);
    signIn(email: string, password: string): Promise<void>;
    getCustomer(external_id: string): Promise<{
        error: string;
        data?: undefined;
    } | {
        data: Customer;
        error?: undefined;
    }>;
    createCustomer(external_id: string): Promise<{
        error: string;
        data?: undefined;
        message?: undefined;
    } | {
        data: Customer;
        message: string;
        error?: undefined;
    }>;
    deleteCustomer(external_id: string): Promise<_supabase_supabase_js.PostgrestResponse<undefined>>;
    addCredits(external_id: string, credits: number): Promise<{
        error: string;
        data?: undefined;
        message?: undefined;
    } | {
        data: {
            current_balance: any[];
        };
        message: string;
        error?: undefined;
    }>;
    createToken(external_id: string, quota?: number, ttl?: number, description?: string): Promise<{
        error: string;
        data?: undefined;
        message?: undefined;
    } | {
        data: Token;
        message: string;
        error?: undefined;
    }>;
    postJob(config: Config, token_key?: string): Promise<{
        error: string;
        data?: undefined;
        message?: undefined;
    } | {
        data: Job;
        message: string;
        error?: undefined;
    }>;
    getResults(job_id: number): Promise<{
        error: string;
        data?: undefined;
        message?: undefined;
    } | {
        data: Result[];
        message: string;
        error?: undefined;
    }>;
    runStableDiffusion(prompt: string, width: number, height: number, steps: number, guidance_scale: 7.5, token_key?: string): Promise<{
        error: string;
        data?: undefined;
        message?: undefined;
    } | {
        data: Job;
        message: string;
        error?: undefined;
    }>;
}
declare const createSelasClient: () => SelasClient;

export { Billing, Config, Customer, DiffusionConfig, IOConfig, ImagePrompt, InputImage, Job, Prompt, Result, SelasClient, TextPrompt, Token, createSelasClient };

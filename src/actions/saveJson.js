'use server';

import { saveJsonFile } from '@/utils/saveJson';

export async function saveJson(data, fileName = "data.json") {
    return saveJsonFile(data, fileName);
}

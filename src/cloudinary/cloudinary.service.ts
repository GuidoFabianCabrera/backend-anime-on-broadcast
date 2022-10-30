import { Injectable } from '@nestjs/common';
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';

@Injectable()
export class CloudinaryService {
  async uploadToCloudinary(path: string, folderName: string) {
    return await v2.uploader
      .upload(path, { folder: folderName })
      .then((res: UploadApiResponse) => {
        return { url: res.url, public_id: res.public_id };
      })
      .catch((error: UploadApiErrorResponse) => {
        return { error: error, url: null, public_id: null };
      });
  }

  async removeAllFolderFromCloudinary(folderName: string) {
    await v2.api
      .delete_all_resources({ folder: folderName })
      .then((result) => result);
  }
}

/*
 * #%L
 * vro-scripting-api
 * %%
 * Copyright (C) 2023 VMware
 * %%
 * Build Tools for VMware Aria
 * Copyright 2023 VMware, Inc.
 * 
 * This product is licensed to you under the BSD-2 license (the "License"). You may not use this product except in compliance with the BSD-2 License.  
 * 
 * This product may include a number of subcomponents with separate copyright notices and license terms. Your use of these subcomponents is subject to the terms and conditions of the subcomponent's license, as noted in the LICENSE file.
 * #L%
 */
namespace vroapi {
    /**
     * vRO ResourceElementCategory intrinsic class representation
     */
    export class ResourceElementCategory {

        name: string;

        description: string;

        path: string;

        parent: ResourceElementCategory | undefined;

        private _resourceElements: ResourceElement[];
        get resourceElements(): ResourceElement[] {
            return this._resourceElements || (this._resourceElements = resources.getElements(this.path));
        }

        get allResourceElements(): ResourceElement[] {
            return this.resourceElements;
        }

        private _subCategories: ResourceElementCategory[];
        get subCategories(): ResourceElementCategory[] {
            return this._subCategories || (this._subCategories = resources.getCategories(this.path));
        }

        invalidateElements() {
            this._resourceElements = null;
        }

        invalidateSubCategories() {
            this._subCategories = null;
        }
    }

    global.ResourceElementCategory = ResourceElementCategory as any;
}
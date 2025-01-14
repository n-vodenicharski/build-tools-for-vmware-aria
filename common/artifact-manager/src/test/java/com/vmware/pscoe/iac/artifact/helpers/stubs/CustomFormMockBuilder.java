package com.vmware.pscoe.iac.artifact.helpers.stubs;

/*
 * #%L
 * artifact-manager
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

import com.vmware.pscoe.iac.artifact.model.vrang.VraNgCustomForm;

public class CustomFormMockBuilder {
	private String id = "formId";
	private String name;


	/**
	 * Returns a Custom form mock with form id set to "formId" and the given name
	 *
	 * @param	name
	 *
	 * @return	CustomFormMockBuilder
	 */
	public CustomFormMockBuilder(String name){
		this.name	= name;
	}

	public CustomFormMockBuilder setId(String id){
		this.id = id;
		return this;
	}
  

	/**
	 * Returns a Custom form mock.
	 *
	 * @param	name
	 *
	 * @return	VraNgCustomForm
	 */
	public VraNgCustomForm build() {
		return new VraNgCustomForm( this.id, this.name, "{}", null, "workflow", null, null, null );
	}

}
